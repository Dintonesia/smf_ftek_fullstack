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
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-6">Create an article</h2>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input id="title" placeholder="Enter article title" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="article-type">
            Article Type <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Berita" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pengumuman">Pengumuman</SelectItem>
              <SelectItem value="Berita">Berita</SelectItem>
              <SelectItem value="Kegiatan">Kegiatan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Enter article description"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="visibility">
            Visibility <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Public" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>
            Banner Image <span className="text-red-500">*</span>
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Recommended: 16:9 of aspect ratio, WEBP-formatted.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="robotika">Robotika</SelectItem>
              <SelectItem value="elektro">Elektro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="bg-primary text-primary-foreground">
            Create Article
          </Button>
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
