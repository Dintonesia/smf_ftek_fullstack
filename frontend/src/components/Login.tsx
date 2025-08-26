import Swal from "sweetalert2";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import logo from "../assets/LogoFTEK.jpeg";

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login: React.FC<LoginProps> = ({ className, ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }), // backend expects { username, password }
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT token (localStorage or cookies)
      localStorage.setItem("token", data.token);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome ADMIN to SMF Admin Dashboard!",
        confirmButtonColor: "#f97316",
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center px-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-transparent">
                <img src={logo} alt="Logo" className="object-contain" />
              </div>
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your SMF FTEK UKSW account
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="ftek2023"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
