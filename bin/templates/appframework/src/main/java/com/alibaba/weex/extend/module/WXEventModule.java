package com.alibaba.jud.extend.module;

import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;

import com.taobao.jud.common.WXModule;
import com.taobao.jud.common.WXModuleAnno;


public class WXEventModule extends WXModule {

  private static final String JUD_CATEGORY = "com.taobao.android.intent.category.JUD";

  @WXModuleAnno(moduleMethod = true,runOnUIThread = true)
  public void openURL(String url) {
    if (TextUtils.isEmpty(url)) {
      return;
    }
    Intent intent = new Intent(Intent.ACTION_VIEW);
    Uri uri = Uri.parse(url);
    String scheme = uri.getScheme();

    if (TextUtils.equals("tel", scheme)) {

    } else if (TextUtils.equals("sms", scheme)) {

    } else if (TextUtils.equals("mailto", scheme)) {

    } else if (TextUtils.equals("http", scheme) ||
        TextUtils.equals("https",
        scheme)) {
      intent.putExtra("isLocal", false);
      intent.addCategory(JUD_CATEGORY);
    } else if (TextUtils.equals("file", scheme)) {
      intent.putExtra("isLocal", true);
      intent.addCategory(JUD_CATEGORY);
    } else {
      intent.addCategory(JUD_CATEGORY);
      uri = Uri.parse(new StringBuilder("http:").append(url).toString());
    }

    intent.setData(uri);
    mWXSDKInstance.getContext().startActivity(intent);
  }
}
