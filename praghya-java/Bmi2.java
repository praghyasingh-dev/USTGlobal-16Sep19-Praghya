class Bmi2
      {
            public static void main(String []args)
            {
               double weight=60;
               double height=5.3;
             double weightInKg=weight*0.453592;
             double heightInMt= (((feet*12)+inches)*.02454);
             


             
            
             double bmi=weightInKg/(heightInMt*heightInMt);
 
              if(bmi>=40 )
              {
               System.out.println("Out of range");
               }
              else if(bmi>=30 && bmi<=39.9)
              {
               System.out.println("you're in obese range");
               }
              else if(bmi>=25 && bmi<=29.9)
              {
               System.out.println("you're in overweight range");
               }
               else if(bmi>=18.5 && bmi<=24.9)
              {
               System.out.println("you're in healthy range");
               }
                else if(bmi<18.5)
              {
               System.out.println("you're in underweight range");
               }

            }
      }