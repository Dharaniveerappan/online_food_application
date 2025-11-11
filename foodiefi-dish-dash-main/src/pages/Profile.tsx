import { ArrowLeft, User, MapPin, CreditCard, Bell, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { icon: User, label: "Edit Profile", path: "/profile/edit" },
  { icon: MapPin, label: "My Addresses", path: "/profile/addresses" },
  { icon: CreditCard, label: "Payment Methods", path: "/profile/payment" },
  { icon: Bell, label: "Notifications", path: "/profile/notifications" },
  { icon: HelpCircle, label: "Help & Support", path: "/profile/help" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* User Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl">
                👤
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">Sarah Johnson</h2>
                <p className="text-muted-foreground">sarah.j@email.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary mb-1">28</p>
              <p className="text-xs text-muted-foreground">Orders</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-accent mb-1">4.8</p>
              <p className="text-xs text-muted-foreground">Avg Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-secondary mb-1">$240</p>
              <p className="text-xs text-muted-foreground">Saved</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start py-6"
                    onClick={() => navigate(item.path)}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span className="text-muted-foreground">›</span>
                  </Button>
                  {index < menuItems.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full text-destructive hover:bg-destructive/10"
          onClick={() => navigate("/")}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        {/* App Info */}
        <p className="text-center text-sm text-muted-foreground">
          FoodieFi v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Profile;
