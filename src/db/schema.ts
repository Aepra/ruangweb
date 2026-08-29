import { pgTable, serial, varchar, text, timestamp, boolean, uuid, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["super_admin", "admin", "editor"]);
export const packageTypeEnum = pgEnum("package_type", ["Starter", "Professional", "Custom"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: roleEnum("role").default("admin").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const serviceCategories = pgTable("service_categories", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  iconName: varchar("icon_name", { length: 255 }).notNull(),
  color: varchar("color_gradient", { length: 255 }).notNull(),
});

export const websiteTypes = pgTable("website_types", {
  id: serial("id").primaryKey(),
  categoryId: serial("category_id").references(() => serviceCategories.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
});

export const websitePackages = pgTable("website_packages", {
  id: serial("id").primaryKey(),
  websiteTypeId: serial("website_type_id").references(() => websiteTypes.id).notNull(),
  packageType: packageTypeEnum("package_type").notNull(),
  isAvailable: boolean("is_available").notNull().default(false),
  description: text("description"),
  reasonNotAvailable: text("reason_not_available"),
});

// --- PORTFOLIO SYSTEM ---

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  clientName: varchar("client_name", { length: 255 }),
  description: text("description").notNull(),
  websiteUrl: varchar("website_url", { length: 255 }),
  coverImage: varchar("cover_image", { length: 500 }).notNull(),
  websiteTypeId: serial("website_type_id").references(() => websiteTypes.id).notNull(),
  completionDate: timestamp("completion_date"),
  isFeatured: boolean("is_featured").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectDocumentations = pgTable("project_documentations", {
  id: serial("id").primaryKey(),
  projectId: serial("project_id").references(() => projects.id, { onDelete: "cascade" }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  description: text("description"),
  orderIndex: serial("order_index"),
});

export const projectTechnologies = pgTable("project_technologies", {
  id: serial("id").primaryKey(),
  projectId: serial("project_id").references(() => projects.id, { onDelete: "cascade" }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});
