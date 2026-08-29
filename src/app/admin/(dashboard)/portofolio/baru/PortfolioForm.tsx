"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProjectAction } from "@/app/actions/portfolio";
import { Upload, X, Plus, Image as ImageIcon, Save, Loader2, Link as LinkIcon, Building2, Code2, Calendar } from "lucide-react";

export default function PortfolioForm({ websiteTypes }: { websiteTypes: any[] }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Basic Info
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [websiteTypeId, setWebsiteTypeId] = useState(websiteTypes[0]?.id || "");
  const [isFeatured, setIsFeatured] = useState(false);
  
  // Cover Image
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");

  // Tech Stack
  const [techInput, setTechInput] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  // Documentations
  const [docs, setDocs] = useState<{ id: string, title: string, file: File, preview: string, description: string }[]>([]);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleAddTech = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && techInput.trim() !== '') {
      e.preventDefault();
      if (!technologies.includes(techInput.trim())) {
        setTechnologies([...technologies, techInput.trim()]);
      }
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const handleAddDoc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setDocs([
        ...docs,
        {
          id: Math.random().toString(),
          title: "Dokumentasi Baru",
          description: "",
          file,
          preview: URL.createObjectURL(file)
        }
      ]);
    }
  };

  const removeDoc = (id: string) => {
    setDocs(docs.filter(d => d.id !== id));
  };

  const updateDoc = (id: string, field: 'title' | 'description', value: string) => {
    setDocs(docs.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const uploadFileToR2 = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverImage) return alert("Gambar sampul wajib diisi!");
    if (!title || !slug || !description) return alert("Data wajib belum lengkap!");
    
    setIsSubmitting(true);
    try {
      // 1. Upload Cover Image
      const coverUrl = await uploadFileToR2(coverImage);
      
      // 2. Upload Documentations
      const uploadedDocs = [];
      for (const doc of docs) {
        const docUrl = await uploadFileToR2(doc.file);
        uploadedDocs.push({
          title: doc.title,
          description: doc.description,
          imageUrl: docUrl
        });
      }

      // 3. Save to Database
      const result = await createProjectAction({
        title,
        slug,
        clientName,
        description,
        websiteUrl,
        coverImage: coverUrl,
        websiteTypeId: Number(websiteTypeId),
        isFeatured,
        technologies,
        documentations: uploadedDocs
      });

      if (result.error) throw new Error(result.error);
      
      router.push("/admin/portofolio");
    } catch (err: any) {
      alert("Error: " + err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Tambah Portofolio Baru</h1>
          <p className="text-slate-400 mt-1">Buat showcase karya terbaik Anda dengan detail yang menarik.</p>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20"
        >
          {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
          {isSubmitting ? "Menyimpan..." : "Simpan Portofolio"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Info Dasar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/5 pb-3">Informasi Utama</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Judul Proyek *</label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                  }}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Cth: Toko Baju Online Keren"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Slug (URL) *</label>
                <input 
                  type="text" 
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Deskripsi Proyek / Studi Kasus *</label>
              <textarea 
                required
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="Ceritakan tantangan klien dan solusi yang Anda berikan..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2"><Building2 size={16}/> Nama Klien</label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Cth: PT Sejahtera Abadi"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2"><LinkIcon size={16}/> Link Website Asli</label>
                <input 
                  type="url" 
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/5 pb-3">Galeri Dokumentasi</h2>
            <p className="text-sm text-slate-400">Tambahkan gambar detail mengenai proyek ini (tampilan mobile, halaman spesifik, dll).</p>
            
            <div className="space-y-4">
              {docs.map((doc, i) => (
                <div key={doc.id} className="flex gap-4 p-4 border border-white/5 rounded-xl bg-black/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={doc.preview} alt="preview" className="w-32 h-24 object-cover rounded-lg border border-white/10" />
                  <div className="flex-1 space-y-3">
                    <input 
                      type="text" 
                      value={doc.title}
                      onChange={(e) => updateDoc(doc.id, 'title', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      placeholder="Judul Gambar (Cth: Tampilan Mobile)"
                    />
                    <input 
                      type="text" 
                      value={doc.description}
                      onChange={(e) => updateDoc(doc.id, 'description', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-slate-300 focus:border-blue-500 focus:outline-none"
                      placeholder="Keterangan singkat..."
                    />
                  </div>
                  <button type="button" onClick={() => removeDoc(doc.id)} className="text-red-400 hover:bg-red-400/10 p-2 rounded-lg h-fit transition-colors">
                    <X size={20} />
                  </button>
                </div>
              ))}
              
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-white/10 rounded-xl hover:bg-white/5 hover:border-blue-500/50 cursor-pointer transition-all">
                <div className="flex items-center gap-2 text-slate-400">
                  <Plus size={18} />
                  <span className="text-sm font-medium">Tambah Foto Dokumentasi</span>
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={handleAddDoc} />
              </label>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Pengaturan Tambahan */}
        <div className="space-y-6">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/5 pb-3">Gambar Sampul *</h2>
            <div className="space-y-4">
              {coverPreview ? (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coverPreview} alt="Cover Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-200">
                      Ganti Gambar
                      <input type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
                    </label>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-white/10 rounded-xl hover:bg-white/5 cursor-pointer transition-all">
                  <ImageIcon className="text-slate-500 mb-2" size={32} />
                  <span className="text-sm text-slate-400 font-medium">Klik untuk Unggah</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
                </label>
              )}
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/5 pb-3">Kategorisasi</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Jenis Website</label>
              <select 
                value={websiteTypeId}
                onChange={(e) => setWebsiteTypeId(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
              >
                {websiteTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <label className="flex items-center gap-3 p-4 border border-white/10 rounded-xl bg-black/20 cursor-pointer hover:bg-black/40 transition-colors">
              <input 
                type="checkbox" 
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-5 h-5 rounded border-white/20 text-blue-500 focus:ring-blue-500 bg-black"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Jadikan Featured</span>
                <span className="text-xs text-slate-400">Tampilkan di halaman depan website</span>
              </div>
            </label>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/5 pb-3 flex items-center gap-2">
              <Code2 size={18} /> Tech Stack
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <span key={tech} className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                    {tech}
                    <button type="button" onClick={() => handleRemoveTech(tech)} className="hover:text-blue-300"><X size={12}/></button>
                  </span>
                ))}
              </div>
              <input 
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleAddTech}
                placeholder="Ketik teknologi lalu Enter (Cth: React)"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
