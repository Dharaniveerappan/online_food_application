import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const orderStatus = [
  { label: "Order Placed", completed: true, time: "2:45 PM" },
  { label: "Preparing", completed: true, time: "2:47 PM" },
  { label: "On the Way", completed: true, time: "3:15 PM" },
  { label: "Delivered", completed: false, time: "~3:35 PM" },
];

const Orders = () => {
  const navigate = useNavigate();
  const currentStep = 2;
  const progress = ((currentStep + 1) / orderStatus.length) * 100;

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
              <h1 className="text-xl font-bold">Track Order</h1>
              <p className="text-sm text-muted-foreground">Order #12345</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Delivery Status</h3>
              <Badge className="bg-success text-white">On the Way</Badge>
            </div>
            <Progress value={progress} className="mb-6" />
            <div className="space-y-4">
              {orderStatus.map((status, index) => (
                <div key={status.label} className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      status.completed
                        ? "bg-success border-success"
                        : "bg-background border-border"
                    }`}
                  >
                    {status.completed && (
                      <span className="text-white text-sm">✓</span>
                    )}
                    {!status.completed && index === currentStep + 1 && (
                      <div className="w-3 h-3 rounded-full bg-border" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        status.completed
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {status.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {status.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-muted flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="relative text-center">
                <div className="text-6xl mb-2">🗺️</div>
                <p className="text-muted-foreground">Live tracking map</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Driver Info */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Delivery Partner</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl">
                👨‍🍳
              </div>
              <div className="flex-1">
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-muted-foreground">
                  4.9 ⭐ • 500+ deliveries
                </p>
              </div>
              <Button size="icon" variant="outline" className="rounded-full">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">2x Classic Burger Deluxe</span>
                <span>$25.98</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">1x Sushi Premium Set</span>
                <span>$24.99</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-primary">$54.96</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Address */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold mb-1">Delivery Address</p>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Apt 4B
                  <br />
                  Downtown, NY 10001
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estimated Time */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold">Estimated Arrival</p>
                <p className="text-sm text-muted-foreground">
                  Your order will arrive in approximately 15-20 minutes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate("/review")}
          >
            Need Help?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
