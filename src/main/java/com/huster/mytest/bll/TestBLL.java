package com.huster.mytest.bll;

import com.huster.mytest.enums.TableTypeEnum;
import com.huster.mytest.result.RefreshResult;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by saibeizhang on 2016/5/23.
 */
@Component
public class TestBLL {

    public String hello() {
        return "hello world";
    }

    public RefreshResult randomData(TableTypeEnum typeEnum) {
        RefreshResult res = new RefreshResult();
        try {
            if (typeEnum == TableTypeEnum.PIE) {
//                res.getResult().addAll(this.pieDatas(RandomUtils.nextInt(5, 8)));
                res.getResult().addAll(this.pieDatas(30));

            } else if (typeEnum != null) {
//                res.getResult().addAll(this.ontherDatas(RandomUtils.nextInt(5, 15)));
                res.getResult().addAll(this.ontherDatas(30));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        res.getDescription().put("top", "test");
        res.getDescription().put("bottom", String.valueOf(new Random().nextInt(100) + "," + RandomUtils.nextInt(100, 999)));
        return res;
    }

    private List pieDatas(Integer round) throws Exception {
        List res = new ArrayList<Double>();
        double sum = 100.00D;
        while (round != 1) {
            double tmp = RandomUtils.nextDouble(0.00D, sum);
            res.add(tmp);
            round--;
            sum -= tmp;
        }
        res.add(sum);
        return res;
    }

    private List ontherDatas(Integer round) throws Exception {
        List res = new ArrayList<Double>();
        while (round != 0) {
            double tmp = RandomUtils.nextDouble(0.00D, 15.00D);
            res.add(tmp);
            round--;
        }
        return res;
    }
}
