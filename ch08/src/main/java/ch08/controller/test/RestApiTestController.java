package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RestApiTestController {
	
	@RequestMapping("/test/rest")
	public String Test() {
		return "rest-test";
	}
}