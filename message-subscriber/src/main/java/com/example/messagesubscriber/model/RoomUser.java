package com.example.messagesubscriber.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor 
@NoArgsConstructor
@EqualsAndHashCode
@IdClass(RoomUserId.class)
@Entity
@Table(name= "room_user")
public class RoomUser {
    @Id
    private String roomId;
    @Id
    private String userId;
    private String auth;
}
