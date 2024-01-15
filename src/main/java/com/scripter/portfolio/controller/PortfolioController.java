package com.scripter.portfolio.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {
	
	
	private static final Logger log = LoggerFactory.getLogger(PortfolioController.class);

	
	@GetMapping("/")
	public String name() {
		log.debug("Loading index page");
		return "index";
	}
}
