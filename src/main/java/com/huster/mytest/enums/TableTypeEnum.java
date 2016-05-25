package com.huster.mytest.enums;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by saibeizhang on 2016/5/25.
 */
public enum TableTypeEnum {

    OTHER("line bar line-2 bar-2"),
    PIE("pie pie-2");

    private String type;

    TableTypeEnum(String type) {
        this.type = type;
    }

    public static TableTypeEnum getEnum(String type) {
        for (TableTypeEnum tte : TableTypeEnum.values()) {
            if (StringUtils.containsIgnoreCase(tte.type, type)) {
                return tte;
            }
        }
        return null;
    }
}