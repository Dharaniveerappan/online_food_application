import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import foodBurger from "@/assets/food-burger.jpg";
import foodSushi from "@/assets/food-sushi.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodTacos from "@/assets/food-tacos.jpg";

const categories = ["All", "Pizza", "Burgers", "Sushi", "Desserts", "Salads", "Mexican"];

const menuItems = [
  {
    id: 1,
    name: "Classic Burger Deluxe",
    description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce",
    category: "Burgers",
    price: 12.99,
    rating: 4.8,
    image: foodBurger,
    popular: true,
  },
  {
    id: 2,
    name: "Sushi Premium Set",
    description: "12 pieces of fresh sushi including salmon, tuna, and eel",
    category: "Sushi",
    price: 24.99,
    rating: 4.9,
    image: foodSushi,
    popular: true,
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    category: "Desserts",
    price: 8.99,
    rating: 4.7,
    image: foodDessert,
  },
  {
    id: 4,
    name: "Fresh Garden Salad",
    description: "Mixed greens, cherry tomatoes, avocado, and grilled chicken",
    category: "Salads",
    price: 9.99,
    rating: 4.6,
    image: foodSalad,
  },
  {
    id: 5,
    name: "Street Tacos (3pc)",
    description: "Authentic Mexican tacos with your choice of protein",
    category: "Mexican",
    price: 11.99,
    rating: 4.8,
    image: foodTacos,
    popular: true,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Browse Menu</h1>
              <p className="text-sm text-muted-foreground">
                {filteredItems.length} dishes available
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Filter */}
      <div className="sticky top-[73px] z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/dish/${item.id}`)}
            >
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover"
                    />
                    {item.popular && (
                      <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1 py-3 pr-3">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-lg font-bold text-primary">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
