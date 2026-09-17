CREATE TABLE "feature_matrix" (
	"id" serial PRIMARY KEY NOT NULL,
	"service_id" serial NOT NULL,
	"feature" varchar(255) NOT NULL,
	"starter" varchar(255),
	"professional" varchar(255),
	"custom" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "packages" (
	"id" serial PRIMARY KEY NOT NULL,
	"service_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"base_price" integer DEFAULT 0 NOT NULL,
	"discount_percentage" integer DEFAULT 0 NOT NULL,
	"is_custom_price" boolean DEFAULT false NOT NULL,
	"description" text NOT NULL,
	"full_details" jsonb
);
--> statement-breakpoint
CREATE TABLE "public_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" text NOT NULL,
	"is_admin_reply" boolean DEFAULT false NOT NULL,
	"reply_to_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"icon_name" varchar(255) NOT NULL,
	"color" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"long_description" text,
	CONSTRAINT "services_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(255);--> statement-breakpoint
ALTER TABLE "feature_matrix" ADD CONSTRAINT "feature_matrix_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "packages" ADD CONSTRAINT "packages_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");