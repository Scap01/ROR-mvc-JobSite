module Readers
    class PostsController < ReadersController
  
      def show
        @post = Post.published.find(params[:id])
        
      end
  
    end
  end
  