package com.huster.mytest.result;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by saibeizhang on 2016/5/25.
 */
public class RefreshResult {

    private Map<String, String> description = new HashMap<String, String>();
    private List<Double> result = new ArrayList<Double>();

    public Map<String, String> getDescription() {
        return description;
    }

    public void setDescription(Map<String, String> description) {
        this.description = description;
    }

    public List<Double> getResult() {
        return result;
    }

    public void setResult(List<Double> result) {
        this.result = result;
    }
}
