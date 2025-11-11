import { Search, MapPin, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import heroPizza from "@/assets/hero-pizza.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodSushi from "@/assets/food-sushi.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodTacos from "@/assets/food-tacos.jpg";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Sushi", icon: "🍱" },
  { name: "Desserts", icon: "🍰" },
  { name: "Salads", icon: "🥗" },
  { name: "Mexican", icon: "🌮" },
];

const featuredDishes = [
  {
    id: 1,
    name: "Classic Burger Deluxe",
    restaurant: "Burger House",
    price: 12.99,
    rating: 4.8,
    time: "20-30 min",
    image: foodBurger,
  },
  {
    id: 2,
    name: "Sushi Premium Set",
    restaurant: "Tokyo Kitchen",
    price: 24.99,
    rating: 4.9,
    time: "30-40 min",
    image: foodSushi,
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    restaurant: "Sweet Dreams",
    price: 8.99,
    rating: 4.7,
    time: "15-25 min",
    image: foodDessert,
  },
  {
    id: 4,
    name: "Fresh Garden Salad",
    restaurant: "Green Bowl",
    price: 9.99,
    rating: 4.6,
    time: "10-15 min",
    image: foodSalad,
  },
  {
    id: 5,
    name: "Street Tacos (3pc)",
    restaurant: "Casa Mexico",
    price: 11.99,
    rating: 4.8,
    time: "15-20 min",
    image: foodTacos,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">FoodieFi</h1>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Downtown, NY 10001</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/cart")}
              className="relative"
            >
              <span className="text-xl">🛒</span>
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for dishes, restaurants..."
              className="pl-10 bg-muted border-0"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={heroPizza}
          alt="Featured food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <Badge className="mb-2 bg-primary text-primary-foreground">
              🔥 Trending Now
            </Badge>
            <h2 className="text-3xl font-bold mb-2">
              Delicious Pizza
            </h2>
            <p className="text-muted-foreground">
              Fresh ingredients, delivered hot to your door
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 hover:border-primary hover:text-primary transition-colors"
              onClick={() => navigate("/menu")}
            >
              <span className="text-3xl">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="container mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Popular Near You</h3>
          <Button variant="link" className="text-primary p-0">
            See all
          </Button>
        </div>
        <div className="grid gap-4">
          {featuredDishes.map((dish) => (
            <Card
              key={dish.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/dish/${dish.id}`)}
            >
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1 py-3 pr-3">
                    <h4 className="font-semibold mb-1">{dish.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {dish.restaurant}
                    </p>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-medium">{dish.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{dish.time}</span>
                    </div>
                    <p className="text-lg font-bold text-primary">
                      ${dish.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-2 py-3">
            <Button
              variant="ghost"
              className="flex flex-col gap-1 h-auto py-2 text-primary"
            >
              <span className="text-xl">🏠</span>
              <span className="text-xs">Home</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col gap-1 h-auto py-2"
              onClick={() => navigate("/menu")}
            >
              <span className="text-xl">📋</span>
              <span className="text-xs">Menu</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col gap-1 h-auto py-2"
              onClick={() => navigate("/orders")}
            >
              <span className="text-xl">📦</span>
              <span className="text-xs">Orders</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col gap-1 h-auto py-2"
              onClick={() => navigate("/profile")}
            >
              <span className="text-xl">👤</span>
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
