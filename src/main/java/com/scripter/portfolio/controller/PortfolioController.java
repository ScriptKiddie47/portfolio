package com.scripter.portfolio.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class PortfolioController {
	
	
	private static final Logger LOG = LoggerFactory.getLogger(PortfolioController.class);

	
	@GetMapping("/")
	public String home(HttpServletRequest httpServletRequest) {
		LOG.info("User IP: {}",httpServletRequest.getRemoteHost());
		return "index";
	}
}
