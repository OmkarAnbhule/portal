import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";

const isAdmin = true;

export default function BlogCard({ blog, onViewMore, onEdit }) {
  // Sanitize the blog content before rendering
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <Card className="my-4 shadow-lg bg-[#00373e] text-white">
      <CardHeader className="text-2xl font-bold">{blog.title}</CardHeader>
      <CardContent className="text-gray-200">
        <div className="text-sm mb-2">{blog.date}</div>
        <p
          dangerouslySetInnerHTML={{ __html: sanitizedContent.slice(0, 100) }}
        />{" "}
        {/* Render sanitized content */}
        {blog.file && (
          <a
            href={blog.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            View Attached File
          </a>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          {blog.tags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-x-2">
          <Button
            variant="link"
            onClick={() => onViewMore(blog)}
            className="text-yellow-300"
          >
            View More
          </Button>
          {isAdmin && (
            <Button
              variant="link"
              onClick={() => onEdit(blog)}
              className="text-yellow-300"
            >
              Edit Blog
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
