function Image(el)
  -- Strip leading slash so /assets/svg/foo.svg → assets/svg/foo.svg
  el.src = el.src:gsub("^/", "")
  return el
end
