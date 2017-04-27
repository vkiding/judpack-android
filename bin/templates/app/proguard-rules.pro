# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /Users/lixinke/Tool/android-eclipse/adt-bundle-mac-x86_64-20140702/sdk/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}
##jud
-keep class com.taobao.jud.bridge.**{*;}
-keep class com.taobao.jud.dom.**{*;}
-keep class com.taobao.jud.adapter.**{*;}
-keep class com.taobao.jud.common.**{*;}
-keep class * implements com.taobao.jud.IWXObject{*;}
-keep class com.taobao.jud.ui.**{*;}
-keep class com.taobao.jud.ui.component.**{*;}
-keep class com.taobao.jud.utils.**{
    public <fields>;
    public <methods>;
    }
-keep class com.taobao.jud.view.**{*;}
-keep class com.taobao.jud.module.**{*;}
-keep public class * extends com.taobao.jud.common.WXModule{*;}
-keep public class com.taobao.jud.WXDebugTool{*;}