package com.news;

import android.app.Application;
import org.pgsqlite.SQLitePluginPackage;
import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
        new RNGestureHandlerPackage(),
         new SQLitePluginPackage(),
          new MainReactPackage(),
        new RNExitAppPackage(),
        new AsyncStoragePackage(),
         new SplashScreenReactPackage()
            // eg. new VectorIconsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}