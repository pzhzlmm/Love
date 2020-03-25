# Java小数点位数保留

<a name="gsoEu"></a>
# 第一种方法-使用DecimalFormat类
举个例子，假如我们需要保留两位小数，我们可以这样写
```java
DecimalFormat df = new DecimalFormat("0.00");
```
测试如下：
```java
double d = 0.200;
DecimalFormat df = new DecimalFormat("0.00");
System.out.println(df.format(d));
```
输出结果为：<br />0.20<br />若double d=0.000；输出结果为0.00；<br />若double d=0；输出结果为0.00；<br />若double d=41.2345；输出结果为41.23；<br />经测试，不管double d的值为多少，最后结果都是正常的两位小数。<br />同理若是保留一位小数`DecimalFormat df = new DecimalFormat("0.0");`其他以此类推
<a name="v5rBG"></a>
### **若是这种写法DecimalFormat df = new DecimalFormat("0.00")，不管传入的任何值，均保留两位小数**
还有一种写法是这样：
```java
double d = 41.123;
DecimalFormat df = new DecimalFormat("#.##");
System.out.println(df.format(d));
```
输出结果为：<br />41.12<br />若double d=2.00，输出结果为2；<br />若double d=41.001，输出结果为41；<br />若double d=41.010，输出结果为41.01；<br />若double d=0，输出结果为0；<br />若double d=0.200，输出结果为0.2；
<a name="Vq8zf"></a>
#### 总结：若是这种写法DecimalFormat df = new DecimalFormat("#.##")，则保留小数点后面不为0的两位小数，这种写法不能保证保留2为小数，但能保证最后一位数不为0；
<br />

---


---

<a name="zQtqE"></a>
# 第二中方法
测试：
```
double d = 0.6544;
String s=String.format("%.2f",d);
System.out.println(s);
```
输出结果为：<br />0.65<br />若double d=0.6566，输出结果为0.66；<br />若double d=0，输出结果为0.00;
<a name="maCMq"></a>
#### 其中String s=String.format("%.2f",d)表示小数点后任意两位小数，其中2为表示两位小数，若需要三位小数，把2改为3即可，其他同理。
<a name="FTUB0"></a>
#### 总结：这种方法不管传入的值是多少，均保留两位小数，并且符合四舍五入的规则。
<br />

---


---

<a name="Tkqpo"></a>
## 第三种方法-使用BigDecimal类
测试：
```
double d = 1.000;
BigDecimal bd=new BigDecimal(d);
double d1=bd.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
System.out.println(d1);
```
输入结果:1.0<br />若double d=0，输出结果为0.0；<br />若double d=1.999，输出结果为2.0；<br />若double d=1.89，输出结果为1.89；
<a name="Jr0lG"></a>
#### 总结：使用这种写法若小数点后均为零，则保留一位小数，并且有四舍五入的规则。
<br />

---


---

<a name="e9E3n"></a>
# 源码
以下为Java测试类
```
import java.math.BigDecimal;
import java.text.DecimalFormat;
public class Test {
    public static void main(String[] args) {
        double d = 1.19;
        System.out.println(formatDecimal4(d));
    }
    public static String formatDecimal1(double d) {
        DecimalFormat df = new DecimalFormat("0.00");
        return df.format(d);
    }
    public static String formatDecimal2(double d) {
        DecimalFormat df = new DecimalFormat("#.##");
        return df.format(d);
    }
    public static String formatDecimal3(double d){
        return String.format("%.2f",d);
    }
    
    public static double formatDecimal4(double d){
        BigDecimal bd=new BigDecimal(d);
        double d1=bd.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
        return d1;
    }
    
}
```

