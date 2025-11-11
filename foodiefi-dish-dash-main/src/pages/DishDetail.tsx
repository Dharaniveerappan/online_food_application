import { useState } from "react";
import { ArrowLeft, Star, Plus, Minus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import foodBurger from "@/assets/food-burger.jpg";
import foodSushi from "@/assets/food-sushi.jpg";

const dishDetails: Record<string, any> = {
  "1": {
    name: "Classic Burger Deluxe",
    restaurant: "Burger House",
    description: "Our signature burger featuring a juicy beef patty cooked to perfection, topped with fresh lettuce, ripe tomatoes, melted cheddar cheese, and our special house sauce on a toasted sesame bun.",
    price: 12.99,
    rating: 4.8,
    reviews: 234,
    time: "20-30 min",
    image: foodBurger,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Special Sauce", "Sesame Bun"],
  },
  "2": {
    name: "Sushi Premium Set",
    restaurant: "Tokyo Kitchen",
    description: "A deluxe assortment of 12 pieces featuring the freshest cuts of salmon, tuna, eel, and more. Served with wasabi, pickled ginger, and soy sauce.",
    price: 24.99,
    rating: 4.9,
    reviews: 187,
    time: "30-40 min",
    image: foodSushi,
    ingredients: ["Fresh Salmon", "Tuna", "Eel", "Rice", "Nori", "Wasabi"],
  },
};

const DishDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const dish = dishDetails[id || "1"] || dishDetails["1"];

  const handleAddToCart = () => {
    toast.success(`Added ${quantity}x ${dish.name} to cart!`);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Image Header */}
      <div className="relative h-80">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-destructive text-destructive" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            {/* Title & Restaurant */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-1">{dish.name}</h1>
              <p className="text-muted-foreground">{dish.restaurant}</p>
            </div>

            {/* Rating & Time */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-semibold">{dish.rating}</span>
                <span className="text-muted-foreground">({dish.reviews})</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">⏱️ {dish.time}</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient: string) => (
                  <Badge key={ingredient} variant="secondary">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <p className="text-2xl font-bold text-primary">
                  ${(dish.price * quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-xl font-semibold w-8 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <div className="container mx-auto">
          <Button
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
          >
            Add to Cart • ${(dish.price * quantity).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
