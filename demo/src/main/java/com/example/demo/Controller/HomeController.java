package com.example.demo.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    //  @GetMapping(value = {"/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
    @GetMapping(value = {"/", "/currentxkcdcomic", "/pastxkcdcomic", "/nasadate", "/nasacount", "/example", "/nasadaterange"})
    public String index(){
        return "index";
    }
}