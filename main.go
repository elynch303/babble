package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

type Response struct {
	Message string `json:"message"`
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Serve the frontend
	router.Use(static.Serve("/", static.LocalFile("./app/build/web", true)))

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
		// api.GET("/jokes", authMiddleware(), JokeHandler)
		// api.POST("/jokes/like/:jokeID", authMiddleware(), LikeJoke)
	}
	// Start the app
	router.Run(":80")
}
