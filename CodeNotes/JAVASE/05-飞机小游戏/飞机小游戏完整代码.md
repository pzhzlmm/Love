# 飞机小游戏完整代码

contant.java
```java
package cn.sxt.game;

public class Constant {
	public static final int GAME_WIDTH = 500;
	public static final  int  GAME_HEIGHT = 500;
}
```
Explode.java
```java
package cn.sxt.game;

import java.awt.Graphics;
import java.awt.Image;

/*
 * 爆炸类
 */
public class Explode {
	double x, y;
	
	static Image[] imgs = new Image[16];
	static {
		for (int i = 0; i < 16; i++) {
			imgs[i] = GameUtil.getImage("images/explode/e" + (i + 1) + ".gif");
			imgs[i].getWidth(null);
		}
	}

	int count;

	public void draw(Graphics g) {
		if (count <= 15) {
			g.drawImage(imgs[count], (int) x, (int) y, null);
			count++;
		}
	}

	public Explode(double x, double y) {
		this.x = x;
		this.y = y;
	}
}
```
GameObject.java
```java
package cn.sxt.game;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.Rectangle;

/**
 * 游戏物体的父类
 * @author 高淇
 *
 */
public class GameObject {
	  Image  img;
	  double  x,y;
	   int   speed;
	  int  width, height;
	
	public  void  drawSelf(Graphics  g){
		g.drawImage(img, (int)x,(int) y, null);
	}

	public GameObject(Image img, double x, double y, int speed, int width, int height) {
		super();
		this.img = img;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.width = width;
		this.height = height;
	}

	public GameObject(Image img, double x, double y) {
		super();
		this.img = img;
		this.x = x;
		this.y = y;
	}
	
	public GameObject() {
	}
	
	/**
	 * 返回物体所在的矩形。便于后续的碰撞检测
	 * @return
	 */
	public  Rectangle   getRect(){
		return  new Rectangle((int)x, (int)y, width, height);
	}
	
	
}
```
GameUtil.java
```java
package cn.sxt.game;
 
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;
import javax.imageio.ImageIO;
 
public class GameUtil {
    // 工具类最好将构造器私有化。
    private GameUtil() {
    } 
 
    
    /**
     * 返回指定路径文件的图片对象
     * @param path
     * @return
     */
    public static Image getImage(String path) {
        BufferedImage bi = null;
        try {
            URL u = GameUtil.class.getClassLoader().getResource(path);
            bi = ImageIO.read(u);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return bi;
    }
}
```
MyGameFrame.java
```java
package cn.sxt.game;

import java.awt.Color;
import java.awt.Font;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.Date;

/**
 * 飞机游戏的主窗口
 * @author 高淇
 *
 */
public class MyGameFrame  extends  Frame {
	
	Image   planeImg  = GameUtil.getImage("images/plane.png");
	Image   bg  = GameUtil.getImage("images/bg.jpg");
	
	Plane   plane = new Plane(planeImg,250,250);
	Shell[]   shells = new Shell[50];
	
	Explode   bao ;
	Date  startTime = new Date();
	Date  endTime;
	int period;   //游戏持续的时间
	
	@Override
	public void paint(Graphics g) {		//自动被调用。  g相当于一只画笔
		Color   c =  g.getColor();
		g.drawImage(bg, 0, 0, null);
		
		plane.drawSelf(g);  //画飞机
		
		//画出所有的炮弹
		for(int i=0;i<shells.length;i++){
			shells[i].draw(g);
			
			//飞机和炮弹的碰撞检测！！！
			boolean  peng = shells[i].getRect().intersects(plane.getRect());
			if(peng){
				plane.live = false;
				if(bao ==null){
					bao  = new Explode(plane.x, plane.y);
					
					endTime = new Date();
					period = (int)((endTime.getTime()-startTime.getTime())/1000);
				}
				bao.draw(g);
			}
			
			//计时功能，给出提示
			if(!plane.live){
				g.setColor(Color.red);
				Font   f  =  new Font("宋体", Font.BOLD, 50);
				g.setFont(f);
				g.drawString("时间："+period+"秒", (int)plane.x, (int)plane.y);
			}
			
		}
		
		g.setColor(c);
	}
	
	
	//帮助我们反复的重画窗口！
	class  PaintThread  extends  Thread  {
		@Override
		public void run() {
			while(true){
				repaint();		//重画
				
				try {
					Thread.sleep(40);   	//1s=1000ms
				} catch (InterruptedException e) {
					e.printStackTrace();
				}		
			}
		}
		
	}
	
	//定义键盘监听的内部类
	class   KeyMonitor extends  KeyAdapter  {

		@Override
		public void keyPressed(KeyEvent e) {
			plane.addDirection(e);
		}

		@Override
		public void keyReleased(KeyEvent e) {
			plane.minusDirection(e);
		}
		
		
	}
	
	
	/**
	 * 初始化窗口
	 */
	public  void  launchFrame(){
		this.setTitle("尚学堂学员_程序猿作品");
		this.setVisible(true);
		this.setSize(Constant.GAME_WIDTH	, Constant.GAME_HEIGHT);
		this.setLocation(300, 300);
		
		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
		
		new PaintThread().start();	//启动重画窗口的线程
		addKeyListener(new KeyMonitor());   //给窗口增加键盘的监听
		
		
		//初始化50个炮弹
		for(int i=0;i<shells.length;i++){
			shells[i] = new Shell();
		}
		
	}
	
	public static void main(String[] args) {
		MyGameFrame  f = new MyGameFrame();
		f.launchFrame();
	}
	
	private Image offScreenImage = null;
	 
	public void update(Graphics g) {
	    if(offScreenImage == null)
	        offScreenImage = this.createImage(Constant.GAME_WIDTH,Constant.GAME_HEIGHT);//这是游戏窗口的宽度和高度
	     
	    Graphics gOff = offScreenImage.getGraphics();
	    paint(gOff);
	    g.drawImage(offScreenImage, 0, 0, null);
	}
	
}
```
Plane.java
```java
package cn.sxt.game;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.KeyEvent;

public class Plane  extends GameObject {
	boolean  left,up,right,down;
	
	boolean  live = true;  
	
	public  void  drawSelf(Graphics  g){
		if(live){
				g.drawImage(img, (int)x,(int) y, null);
				
				if(left){
					x -=speed;
				}
				if(right){
					x += speed;
				}
				if(up){
					y -=speed;    //y = y-speed;
				}
				if(down){
					y += speed;
			}
		}else{
			
		}
		
		
		
	}
	
	public  Plane(Image  img, double x, double y){
		this.img = img;
		this.x = x;
		this.y = y;
		this.speed = 3;
		this.width = img.getWidth(null) ;
		this.height = img.getHeight(null);
		
	}
	
	//按下某个键，增加相应的方向
	public  void   addDirection(KeyEvent  e){
		switch (e.getKeyCode()) {
		case KeyEvent.VK_LEFT:
			left = true;
			break;
		case KeyEvent.VK_UP:
			up = true;
			break;
		case KeyEvent.VK_RIGHT:
			right = true;
			break;
		case KeyEvent.VK_DOWN:
			down = true;
			break;
		}
	}
	
	//按下某个键，取消相应的方向
		public  void   minusDirection(KeyEvent  e){
			switch (e.getKeyCode()) {
			case KeyEvent.VK_LEFT:
				left = false;
				break;
			case KeyEvent.VK_UP:
				up = false;
				break;
			case KeyEvent.VK_RIGHT:
				right = false;
				break;
			case KeyEvent.VK_DOWN:
				down = false;
				break;
			}
		}
	
	
}

```
Shell.java
```java
package cn.sxt.game;

import java.awt.Color;
import java.awt.Graphics;

/**
 * 炮弹类
 * @author 高淇
 *
 */
public class Shell   extends  GameObject {
	
	double  degree;
	
	public  Shell(){
		x = 200;
		y = 200;
		width=10;
		height = 10;
		speed = 3;
		degree = Math.random()*Math.PI*2;
	}
	
	public  void   draw(Graphics  g){
		Color   c =  g.getColor();
		g.setColor(Color.YELLOW);
		
		g.fillOval((int)x,(int) y, width, height);
		
		//炮弹沿着任意角度去飞
		x += speed*Math.cos(degree);
		y += speed*Math.sin(degree);
		
		
		if(x<0||x>Constant.GAME_WIDTH-width){
			degree  = Math.PI - degree;
		}
		
		if(y<30||y>Constant.GAME_HEIGHT-height){
			degree  = - degree;
		}
		
		
		
		
		g.setColor(c);
	}
	
}

```

