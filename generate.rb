MONTH_NAMES = {
  "January" => "Mary Grace", "February" => "Kokoy", "March" => "Jay", "April" => "Miggy",
  "May" => "Dodong", "June" => "Xiaome", "July" => "Nico", "August" => "Vicky",
  "September" => "Abner", "October" => "Joy", "November" => "Greg", "December" => "Jason"
}

DAY_NAMES = {
  1 => "Piattos", 2 => "Chippy", 3 => "Nova", 4 => "Mango", 5 => "Durian", 6 => "Kamote", 7 => "Patatas", 8 => "Otso",
  9 => "Clover", 10 => "Villamin", 11 => "Bina", 12 => "Alcala", 13 => "Barok", 14 => "Tempura", 15 => "Sinigang", 16 => "Dinuguan",
  17 => "Lays", 18 => "Ruffles", 19 => "Turon", 20 => "Lumpia", 21 => "Adobo", 22 => "Orange", 23 => "Milo", 24 => "Juice",
  25 => "C2", 26 => "Coke", 27 => "Igado", 28 => "Coffee", 29 => "Bagoong", 30 => "Talong", 31 => "Barquillos"
}

def generate_name(month, day)
  month_name = MONTH_NAMES[month]
  day_name = DAY_NAMES[day]
  "#{month_name} #{day_name}"
end

# Example usage
puts "Enter birth month (e.g., June): "
birth_month = gets.chomp
puts "Enter birth day (1-31): "
birth_day = gets.chomp.to_i

if MONTH_NAMES.key?(birth_month) && DAY_NAMES.key?(birth_day)
  puts "Your Confidential Fund Name is: #{generate_name(birth_month, birth_day)}"
else
  puts "Invalid input. Please enter a valid month and day."
end

