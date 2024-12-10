#include <iostream>
using namespace std;

int main() {
    int num;
    cout<<"Enter the number of elements: "<<endl;
    cin>>num;
     if(num<=0){
         cout<<"Please enter valid positive number"<<endl;
     }
     int elements[100];
     for(int i=0; i<num; i++){
         cout<<"Enter element"<<i+1<<":";
         cin>>elements[i];
     }
     int start=0;
     int end=num-1;
     while(start<end){
         int temp=elements[start];
         elements[start]=elements[end];
         elements[end]=temp;
         start++;
         end--;
     }
     cout<<"Reversed Array: ";
     for(int i=0; i<num; i++){
         cout<<elements[i]<<" ";
     }
     cout<<endl;
     return 0;
}