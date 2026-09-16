CREATE TYPE "public"."invitation_status" AS ENUM('draft', 'published');--> statement-breakpoint
CREATE TABLE "digital_invitations" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"client_name" varchar(255) NOT NULL,
	"event_date" timestamp,
	"cover_image" varchar(500),
	"demo_url" varchar(500),
	"status" "invitation_status" DEFAULT 'draft' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "digital_invitations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "invitation_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	CONSTRAINT "invitation_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "project_documentations" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"image_url" varchar(500) NOT NULL,
	"description" text,
	"order_index" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" serial NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"client_name" varchar(255),
	"description" text NOT NULL,
	"website_url" varchar(255),
	"cover_image" varchar(500) NOT NULL,
	"website_type_id" serial NOT NULL,
	"completion_date" timestamp,
	"is_featured" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "site_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"total_visitors" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "digital_invitations" ADD CONSTRAINT "digital_invitations_category_id_invitation_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."invitation_categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_documentations" ADD CONSTRAINT "project_documentations_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_technologies" ADD CONSTRAINT "project_technologies_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_website_type_id_website_types_id_fk" FOREIGN KEY ("website_type_id") REFERENCES "public"."website_types"("id") ON DELETE no action ON UPDATE no action;