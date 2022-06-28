OK，排序这一个篇章也快要结束了。

这一篇主要说的是快速排序，说的方式主要还是先说原理，然后再用代码来进行实现。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210418202338291.gif#pic_center)  
所谓快速排序，就是分为三步走：

第一步：选择第一个数字分离出来为基数  
第二步：然后将序列中大于基数的放在基数右边，小于基数的放在基数的左边  
第三步：然后对基数的左边和右边两个序列重复第二步和第三步

这样就能形成一个有序的序列，那么重点是我们如何来实现第二步这个过程呢？  
我们用图解来说明一下。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021041909382354.gif#pic_center)  
倘若我们有这样一个序列  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419093945465.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
现在我们按步骤来，先把第一个元素4储存起来。  
然后定义两个指针分别指向第一个元素和最后一个元素。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094146585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
然后我们让j先移动（记住一定是j先移动），一旦碰到比基数小的我们就停止移动，并且把j位置的值赋给i位置上的值。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094351749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
好现在j停下来，我们让i移动，一旦碰到比基数大的值，就把i位置上的值赋给j位置上的值。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094520275.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
OK，现在i停下来，j移动。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094639466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
J停下来，i移动  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094740528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
i停下来，j移动  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094842492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
j停下来，i移动  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419094942250.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
i停下来，j移动  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419095024285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
然后最后i再移动一下  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419095056162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
此时i和j所处的位置是一样的  
这个时候我们把基数放在i和j共同的位置上就可以了。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419095144348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjcyNjM0Ng==,size_16,color_FFFFFF,t_70)  
这样就能做到基数4左边都是比自己小的，右边都是比自己大的。  
这样这个基数的位置就找到了。

现在我们再对基数左边的序列和右边的序列重复上面的步骤，就可以得到一个有序的序列啦。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210419095307839.jpg#pic_center)  
现在我们用代码来实现一下

```
    <script>
        function sort(arr,begin,end){
            if(begin < end){
                let i = begin;
                let j = end;
                let empty = arr[begin];
                while(i < j){
                    while(arr[j] > empty && i < j){
                        j --;
                    }
                    arr[i] = arr[j];
                    while(arr[i] < empty && i < j){
                        i ++;
                    }
                    arr[j] = arr[i];
                }
                arr[i] = empty;
                sort(arr,begin,i-1);
                sort(arr,i+1,end);
            }else{
                return;
            }
        }

        let arr = [2,3,1,4,8,7,9,6];
        sort(arr,0,7);
        console.log(arr);
    </script>

```

OK，关于快速排序也就说完了。

 

  

本文转自 [https://blog.csdn.net/weixin\_46726346/article/details/115839126](https://blog.csdn.net/weixin_46726346/article/details/115839126)，如有侵权，请联系删除。