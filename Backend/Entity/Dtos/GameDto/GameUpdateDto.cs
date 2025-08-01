﻿using Entity.Dtos.Base;
using Entity.Model;

namespace Entity.Dtos.ClienteDto
{
    public class GameUpdateDto :GenericDto
    {
        public DateTime Time { get; set; }
        public int RoomPlayersId { get; set; }
        public int MazoId { get; set; }
    }
}
