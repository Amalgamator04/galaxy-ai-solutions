import React, { useState } from 'react'
import { Star, Send, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader } from './ui/card'
import { useToast } from '@/hooks/use-toast'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  timestamp: Date
}

export function InteractiveReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and review comment.",
        variant: "destructive"
      })
      return
    }

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      timestamp: new Date()
    }

    setReviews(prev => [review, ...prev])
    setNewReview({ name: '', rating: 5, comment: '' })
    
    toast({
      title: "Review Added!",
      description: "Thank you for your feedback. Your review has been posted.",
    })
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'fill-cosmic-gold text-cosmic-gold' 
            : 'text-muted-foreground/30'
        } ${interactive ? 'cursor-pointer hover:text-cosmic-gold transition-colors' : ''}`}
        onClick={() => interactive && onRatingChange && onRatingChange(i + 1)}
      />
    ))
  }

  return (
    <section id="reviews" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Share Your Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your experience working with us
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="cosmic-card">
            <CardHeader>
              <h3 className="text-2xl font-semibold gradient-text text-center">
                Write a Review
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <div className="flex space-x-1">
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview(prev => ({ ...prev, rating }))
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium mb-2">
                    Your Review
                  </label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Share your experience working with us..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full cosmic-button"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Display */}
        {reviews.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-center gradient-text">
              Recent Reviews
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="cosmic-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-cosmic-gradient rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold gradient-text">
                              {review.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {review.timestamp.toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>

                      {/* Comment */}
                      <blockquote className="text-muted-foreground leading-relaxed italic">
                        "{review.comment}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {reviews.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-cosmic-gradient/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-cosmic-gold" />
            </div>
            <p className="text-lg text-muted-foreground">
              Be the first to share your experience!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}