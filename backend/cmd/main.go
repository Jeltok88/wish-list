package main

import (
	"log"

	"github.com/Jeltok88/wish-list/backend/app/internal/server"
)

func main() {
	r := server.NewGin()
	log.Println("listen :8080")
	_ = r.Run(":8080")
}
