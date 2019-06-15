def bbs(array)
  sorted = false
  while !sorted
    sorted = true
    array.each_with_index do |el, i|
      if el > array[i+1]
        sorted = false
        array[i] ,array[i+1] = array[i+1], array[i]
      end
    end
  end
  return array
end