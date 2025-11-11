import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import foodBurger from "@/assets/food-burger.jpg";

const Review = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Thank you for your feedback!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Rate Your Order</h1>
              <p className="text-sm text-muted-foreground">Order #12345</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Order Items */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Your Order</h3>
            <div className="flex gap-4 items-center">
              <img
                src={foodBurger}
                alt="Classic Burger Deluxe"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold">Classic Burger Deluxe</p>
                <p className="text-sm text-muted-foreground">Burger House</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-center">
              How was your meal?
            </h3>
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= (hoveredRating || rating)
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-muted-foreground">
                {rating === 5 && "Excellent! 🎉"}
                {rating === 4 && "Great! 😊"}
                {rating === 3 && "Good 👍"}
                {rating === 2 && "Could be better 😐"}
                {rating === 1 && "Not satisfied 😞"}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Written Review */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">
              Tell us more (optional)
            </h3>
            <Textarea
              placeholder="Share your experience with this dish..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="min-h-32 resize-none"
            />
          </CardContent>
        </Card>

        {/* Quick Feedback Tags */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Quick feedback</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Fresh ingredients",
                "Great taste",
                "Perfect portion",
                "Fast delivery",
                "Hot & fresh",
                "Good packaging",
              ].map((tag) => (
                <Button key={tag} variant="outline" size="sm">
                  {tag}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button size="lg" className="w-full" onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default Review;
