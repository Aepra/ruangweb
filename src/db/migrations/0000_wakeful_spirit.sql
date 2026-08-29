CREATE TYPE "public"."package_type" AS ENUM('Starter', 'Professional', 'Custom');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('super_admin', 'admin', 'editor');--> statement-breakpoint
CREATE TABLE "service_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"icon_name" varchar(255) NOT NULL,
	"color_gradient" varchar(255) NOT NULL,
	CONSTRAINT "service_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" text NOT NULL,
	"role" "role" DEFAULT 'admin' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "website_packages" (
	"id" serial PRIMARY KEY NOT NULL,
	"website_type_id" serial NOT NULL,
	"package_type" "package_type" NOT NULL,
	"is_available" boolean DEFAULT false NOT NULL,
	"description" text,
	"reason_not_available" text
);
--> statement-breakpoint
CREATE TABLE "website_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "website_packages" ADD CONSTRAINT "website_packages_website_type_id_website_types_id_fk" FOREIGN KEY ("website_type_id") REFERENCES "public"."website_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "website_types" ADD CONSTRAINT "website_types_category_id_service_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."service_categories"("id") ON DELETE no action ON UPDATE no action;