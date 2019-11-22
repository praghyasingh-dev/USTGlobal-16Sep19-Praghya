class Circle
{
         public static void main(String[]args)
         {
          double r=10.0;
          
         
         double val1=area(r);
          System.out.println("area of circle is="+val1);
          double val2=circumference(r);
           System.out.println("circumference of circle is="+val2);
          boolean res=oddEven(10);
           System.out.println("check odd even="+res);

         }

         static double area(double r)
         {
              double z=3.14*r*r;
            
              return z;

         }
           static double circumference(double r)
         {
              double p=2*3.14*r;
            
              return p;
             

         }

         static boolean oddEven(int num)
             {    if(num%2==0)
                    {
                      return true;
                     }
                    else
                   {
                     return false;
                     }
              }
}