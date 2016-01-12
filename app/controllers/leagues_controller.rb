class LeaguesController < ApplicationController
  before_action :set_league, only: [:show, :edit, :update, :destroy]

  def index
    respond_with League.all
  end

  def show
    respond_with League.find(params[:id])
  end


  # POST /leagues
  def create
    respond_with League.create(league_params)
  end

  # PATCH/PUT /leagues/1
  def update
    respond_with League.update(league_params)
  end

  # DELETE /leagues/1
  def destroy
    league = League.find(params[:id])
    respond_with league.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_league
      @league = League.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def league_params
      params.require[:league].permit(:name, :description)
    end
end
