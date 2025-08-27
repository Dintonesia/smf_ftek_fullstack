"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Upload } from "lucide-react";

const CreateArticle = () => {
  const [formData, setFormData] = useState({
    _author: "admin",
    _title: "",
    _description: "",
    _content: "",
    _tags: [] as string[],
    _visibility: true,
    _banner: "",
  });

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTags = (tagsString: string) => {
    const tagsArray = tagsString
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    handleChange("_tags", tagsArray);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("_banner", reader.result as string); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "Failed to create article");
      }

      // ✅ Success Alert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Article created successfully 🎉",
        confirmButtonColor: "#ffa500",
      });
    } catch (error) {
      console.error("Submit error:", error);

      // ❌ Error Alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error creating article. Please try again!",
        confirmButtonColor: "#e69500",
      });
    }
  }; // 🔥 this was missing

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-6">Create an article</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            placeholder="Enter article title"
            value={formData._title}
            onChange={(e) => handleChange("_title", e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            rows={3}
            placeholder="Short description"
            value={formData._description}
            onChange={(e) => handleChange("_description", e.target.value)}
          />
        </div>

        {/* Full Content */}
        <div className="space-y-2">
          <Label htmlFor="content">Content *</Label>
          <Textarea
            id="content"
            rows={6}
            placeholder="Write your article..."
            value={formData._content}
            onChange={(e) => handleChange("_content", e.target.value)}
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            id="tags"
            placeholder="technology, javascript, tutorial"
            onChange={(e) => handleTags(e.target.value)}
          />
        </div>

        {/* Visibility */}
        <div className="space-y-2">
          <Label htmlFor="visibility">Visibility *</Label>
          <Select
            onValueChange={(v) => handleChange("_visibility", v === "true")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Public</SelectItem>
              <SelectItem value="false">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Banner */}
        <div className="space-y-2">
          <Label>Banner Image *</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center relative cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Recommended: 16:9 aspect ratio, WEBP/PNG/JPEG.
            </p>
            <input
              type="file"
              accept="image/webp,image/png,image/jpeg"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
          {formData._banner && (
            <p className="text-sm text-green-600">✅ Image ready (Base64)</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <Button type="submit" className="bg-primary text-primary-foreground">
            Create Article
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => Swal.fire("Draft saved (not yet implemented)!")}
          >
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
