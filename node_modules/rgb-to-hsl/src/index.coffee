
module.exports = (r, g, b) ->
  r /= 255
  g /= 255
  b /= 255

  max = Math.max(r, g, b)
  min = Math.min(r, g, b)

  h = 0
  s = 0
  l = (max + min) / 2

  if max is min
    h = s = 0
  else
    d = max - min
    s =
      if l > 0.5
        d / (2 - max - min)
      else
        d / (max + min)

    switch max
      when r
        h = (g - b) / d + (if g < b then 6 else 0)
      when g
        h = (b - r) / d + 2
      when b
        h = (r - g) / d + 4
    h /= 6

  h = Math.ceil(h * 360)
  s = "#{Math.ceil(s * 100)}%"
  l = "#{Math.ceil(l * 100)}%"

  [h, s, l]
