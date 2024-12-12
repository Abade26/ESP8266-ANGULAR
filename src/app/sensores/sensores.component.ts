import { Component, OnInit } from '@angular/core';
import { SupabaseService } from "../supabase.service";

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponet implements OnInit {
  sensorData: any[] = [];
  
  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.loadSensorData();
  }

  async loadSensorData(){
    this.sensorData = await this.supabaseService.getSensorData();
  }
}