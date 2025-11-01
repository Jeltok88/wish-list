package main

import (
	"log"

	"github.com/Jeltok88/wish-list/backend/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	r.POST("/api/login", handlers.Login)
	r.POST("/api/register", handlers.Register)

	log.Println("Сервер запущен на http://localhost:8080")
	r.Run(":8080")
}
