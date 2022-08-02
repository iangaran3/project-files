#include<stdio.h>
int main()
{
    struct node
    {
        int data;
        struct node*next;

    }
    struct *head ,*newnode,*temp;
    head =0;
    int choice=0;
    do(choice)
    {
        newnode=(struct node*)malloc(sizeof(struct node));
        printf("enter the new node ");
        scanf("%d",&newnode->data);
        newnode->next=0;

        if(head==0)
        {
            head = newnode;
            temp = newnode;
        }  
        else
        {
            temp->next =newnode;
            temp = newnode ;

        } 

       printf("enter your choice 0 & 1 ")
    scanf("%d",choice)      
    }
    while(choice)
    temp =head;
    while(temp != 0)
    {
        printf("%d",temp->data);
        temp =temp->next;
    }
}