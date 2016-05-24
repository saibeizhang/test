package com.saibei.commons;

import com.google.common.base.Optional;
import com.huster.mytest.bll.TestBLL;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by saibeizhang on 2016/5/23.
 */
public class Test_1 {

    TestBLL tc;
//    @Test
    public void test_1() {
        Optional<String> op = Optional.fromNullable(new String("abc"));
        boolean a = op.isPresent();
        System.out.println(a);
        System.out.println(op.asSet());
    }

    @Before
    public void before() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:spring-mvc.xml");
        tc = (TestBLL)ac.getBean("testBLL");
    }

    @Test
    public void test_b() {
        System.out.println(tc.hello());
    }
}
