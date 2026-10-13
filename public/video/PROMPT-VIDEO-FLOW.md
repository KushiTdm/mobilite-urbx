# Vidéo hero URBX — prompt Flow (Veo, image → vidéo)

**Image de départ (Frame):** `public/video/hero-start-frame.png`
**Durée:** 8 s · **Format:** 16:9 · **Audio:** désactivé (la vidéo est muette sur le site)
**Fichier à produire:** `public/video/hero.mp4` (déjà référencé dans le site, `poster` = `hero-poster.webp`)

## Prompt (copier-coller dans Flow, mode « Frames to Video »)

```
Starting from the provided frame, the camera performs a slow, smooth tracking shot following the commuter on the electric kick scooter from behind, gliding forward along the empty city bike lane at golden hour. The rider advances steadily and calmly, gently leaning into a soft curve of the lane; the scooter's lime green deck light glows softly. Warm sunlight flares between the glass and brick buildings, long shadows slide across the asphalt, autumn leaves flutter lightly in the breeze, distant city lights and a few blurred cyclists pass far in the background. The camera slowly pushes forward and rises very slightly, keeping the rider in the right third of the frame and the left side of the frame open and calm. Cinematic, photorealistic, 35mm anamorphic look, shallow depth of field, natural motion blur, stable and fluid movement, premium urban mobility commercial. Ends on a similar composition to the first frame so the clip can loop.

No text, no logos, no watermark, no sudden cuts, no shaking camera, no distorted wheels or bodies, no extra riders in the foreground, no faces visible.
```

## Variante « boucle parfaite » (option Flow : First + Last frame)
Utiliser la même image comme **première ET dernière image** : le clip bouclera sans saut sur le site.

## Intégration
1. Télécharger le clip depuis Flow, le nommer `hero.mp4`, le placer dans `UrbX/public/video/`.
2. Optionnel, pour alléger (< 3 Mo) :
   `ffmpeg -i hero.mp4 -an -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart hero.mp4`
