# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Pseudo; Create a method called contains that will take in an array as its first parameter and single letter as its second parameter
# create a conditional that accounts for the edge case that more than single letter is inputted and return a invalid input statment
# in the else of the conditional use map to iterate through the array and check if each value contains that letter, if so return the vlaue into a new array.
# finally use the compact method after the meap method to remove any nil value from the new array.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains(array, single_letter)
    if single_letter.length > 1
         "Invalid input, must be a single letter"
    else array.map { |value| value if value.include?(single_letter) }.compact
    end
end

# p contains(beverages_array,letter_o) # --> ["coffee", "soda water"]
# p contains(beverages_array,letter_t) # --> ["tea", "water", "soda water"]
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# Pseudo: Create a method called alphabetical_array that takes in a hash
# call the .to_a method on the hash to transfrom it into an array and the use the .flatten method to get rid of nested arrays
# The use the select method to filter out any elements within the array that are Symbols
# Finally use the sort method to sort the values into alphabetical order

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def alphabetical_array(hash)
    hash.to_a.flatten.select {|element| !element.is_a?(Symbol) }.sort
end

# p alphabetical_array(us_states) # --> ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo: Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0.
# Create a method within the Bike class called bike_info that returns a sentence use string interpolation with all the data from the bike object.
# Create another method within the Bike class called pedal_faster that takes in an integer as its paramter and increases the current_speed by that given amount
# Create another method within the Bike class called brake that takes in an integer as its paramter and decreases the current_speed by that given amount, if the given amount is greater than the current_speed return 0.
# Create a new variable called my_bike and use the Bike class to create a new instance variable, make sure there is the correct number of arguments present when creating the instance variable or an error will occur.
# Call the created methods on the my_bike variable

class Bike
   def initialize(model, wheels, current_speed)
    @model = model
    @wheels = 2
    @current_speed = 0
   end
   
   def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster(speed)
    @current_speed += speed
    @current_speed
  end

  def brake(speed)
    if @current_speed > speed
        @current_speed -= speed
    else
        @current_speed = 0
    end
  end
end

my_bike = Bike.new('Trek', @wheels, @current_speed)
p my_bike.bike_info # --> "This bike is a Motorcycle with 2 wheels and a current speed of 0 mph."
p my_bike.pedal_faster(10) # --> 10
p my_bike.pedal_faster(18) # --> 28
p my_bike.brake(5) # --> 23
p my_bike.brake(25) # --> 0