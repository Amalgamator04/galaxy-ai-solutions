import React, { useState } from 'react'
import { Upload, X, Edit3, Save, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useToast } from '@/hooks/use-toast'

interface WorkItem {
  id: string
  image: string
  title: string
  description: string
}

export function WorkGallery() {
  const [workItems, setWorkItems] = useState<WorkItem[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ title: '', description: '' })
  const { toast } = useToast()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newItem: WorkItem = {
          id: Date.now().toString(),
          image: e.target?.result as string,
          title: 'New Project',
          description: 'Click edit to add description...'
        }
        setWorkItems(prev => [...prev, newItem])
        toast({
          title: "Image Added!",
          description: "Click edit to add title and description.",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEdit = (item: WorkItem) => {
    setEditingId(item.id)
    setEditForm({ title: item.title, description: item.description })
  }

  const handleSave = () => {
    if (editingId) {
      setWorkItems(prev => prev.map(item => 
        item.id === editingId 
          ? { ...item, title: editForm.title, description: editForm.description }
          : item
      ))
      setEditingId(null)
      toast({
        title: "Updated!",
        description: "Work item has been updated successfully.",
      })
    }
  }

  const handleDelete = (id: string) => {
    setWorkItems(prev => prev.filter(item => item.id !== id))
    toast({
      title: "Deleted!",
      description: "Work item has been removed.",
    })
  }

  return (
    <section id="work-gallery" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visual showcase of our data analytics projects and solutions
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Upload Section */}
        <div className="cosmic-card max-w-2xl mx-auto mb-16">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-cosmic-blue/20 rounded-2xl flex items-center justify-center">
              <Upload className="w-10 h-10 text-cosmic-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Add New Work</h3>
              <p className="text-muted-foreground text-sm">
                Upload images of your projects, dashboards, or analytics work
              </p>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button className="cosmic-button" asChild>
                  <span>
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Image
                  </span>
                </Button>
              </label>
            </div>
          </div>
        </div>

        {/* Work Items Grid */}
        {workItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <div
                key={item.id}
                className="cosmic-card space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="destructive"
                      className="w-8 h-8"
                      onClick={() => handleDelete(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {editingId === item.id ? (
                    /* Edit Mode */
                    <div className="space-y-3">
                      <Input
                        value={editForm.title}
                        onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Project title..."
                        className="font-semibold"
                      />
                      <Textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Project description..."
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleSave} className="cosmic-button">
                          <Save className="w-3 h-3 mr-1" />
                          Save
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* View Mode */
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="w-8 h-8 opacity-60 hover:opacity-100"
                          onClick={() => handleEdit(item)}
                        >
                          <Edit3 className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="cosmic-card max-w-md mx-auto text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">No work items yet</h3>
              <p className="text-muted-foreground text-sm">
                Upload your first project image to get started
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}