package com.huster.mytest.controller;

import com.alibaba.fastjson.JSON;
import com.huster.mytest.bll.TestBLL;
import com.huster.mytest.enums.TableTypeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by saibeizhang on 2016/5/23.
 */
@Controller
public class TestController {

    @Autowired
    TestBLL testBLL;

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
            return "/chrome.html";
        } else if (request.getHeader("User-Agent").toLowerCase().contains("windows")) {
            return "/ie.jsp";
        }
        return "/404.jsp";
    }

    @RequestMapping(value = "/404")
    public String test_c() { return "/404.jsp"; }

    @RequestMapping(value = "/refresh", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public @ResponseBody String refresh(@RequestParam String type) {
        return JSON.toJSONString(testBLL.randomData(TableTypeEnum.getEnum(type)));
    }
}
