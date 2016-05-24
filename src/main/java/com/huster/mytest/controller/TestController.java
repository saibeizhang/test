package com.huster.mytest.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

/**
 * Created by saibeizhang on 2016/5/23.
 */
@Controller
public class TestController {

    @RequestMapping(value = "/test", method= RequestMethod.GET, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String test() {
        HashMap<String, String> a = new HashMap<String, String>();
        a.put("a", "abc");
        return JSON.toJSONString(a);
    }

    @RequestMapping(value = "/")
    public String test_b(HttpServletRequest request) {
        if (request.getHeader("User-Agent").toLowerCase().contains("chrome")) {
            return "chrome";
        } else if (request.getHeader("User-Agent").toLowerCase().contains("windows")) {
            return "ie";
        }
        return "404";
    }

    @RequestMapping(value = "/404")
    public String test_c() { return "404"; }
}
