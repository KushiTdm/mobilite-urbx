import { useEffect, useSyncExternalStore } from 'react';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';

const EVENT = 'urbx:navigate';

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener('popstate', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('popstate', cb);
  };
};

export const usePath = () =>
  useSyncExternalStore(subscribe, () => window.location.pathname, () => '/');

export function navigate(to: string) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new Event(EVENT));
}

/** Scroll to the hash target, or to the top when there is none. */
export function useScrollOnNavigate(path: string) {
  useEffect(() => {
    const hash = window.location.hash;
    const id = setTimeout(() => {
      const el = hash ? document.querySelector(hash) : null;
      if (el) {
        window.scrollTo(0, (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64);
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [path]);
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const [pathname, hash] = to.split('#');
    const samePage = (pathname || window.location.pathname) === window.location.pathname;
    if (samePage && hash) {
      window.history.pushState({}, '', to);
      const el = document.querySelector(`#${hash}`);
      if (el) window.scrollTo(0, (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64);
      return;
    }
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
