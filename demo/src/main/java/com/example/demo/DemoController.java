package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {

    private final DemoApplication demoApplication;

    @Autowired
    public DemoController(DemoApplication demoApplication) {
        this.demoApplication = demoApplication;
    }

    @GetMapping("/info")
    public ResponseEntity<?> getInfo() {
        Map<String, List<String>> setsInfo = demoApplication.getInfo();

        if (!setsInfo.isEmpty()) {
            return ResponseEntity.ok(setsInfo);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to retrieve information");
        }
    }

    @GetMapping("/card/{name}")
    public ResponseEntity<?> getSingleCard(@PathVariable String name) {
        List<Map<String, Object>> cardInfo = demoApplication.getSingleCardInfo(name);

        if (!cardInfo.isEmpty()) {
            return ResponseEntity.ok(cardInfo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Card not found");
        }
    }

    @GetMapping("/set/{set}")
    public ResponseEntity<?> getCardsInSet(@PathVariable String set) {
        List<Map<String, Object>> cardsInSet = demoApplication.getCardsInSet(set);

        if (!cardsInSet.isEmpty()) {
            return ResponseEntity.ok(cardsInSet);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cards in set not found");
        }
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<?> searchCardByName(@PathVariable String name) {
        List<Map<String, Object>> searchedCards = demoApplication.searchCardByName(name);

        if (!searchedCards.isEmpty()) {
            return ResponseEntity.ok(searchedCards);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No cards found for the search query");
        }
    }
}
